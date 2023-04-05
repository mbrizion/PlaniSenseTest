import axios from "axios";
import { useEffect, useState } from "react";
import Default from "../Default";
import Title from "../Title";
import "./style.scss";

type treesByDistrict = {
  arr: string;
  count: number;
};

function TreesByDistrict() {
  const [trees, setTrees] = useState<treesByDistrict[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/treebydistrict")
      .then((res) => {
        setTrees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const treeList = trees
    .sort((a, b) => a.count - b.count)
    .reverse()
    .map((c, i) => (
      <div className="tree-list" key={i}>
        <div className="tree-name">{c.arr}</div>
        <div className="tree-count">{c.count}</div>
      </div>
    ));
  return (
    <Default>
      <h1 className="section-title">
        Arbres de Paris et alentours, triés par du plus grand nombre au plus
        petit
      </h1>
      <div className="district-wrapper">
        <Title gender="Arrondissements" count="Arbres par arrondissement" />
        <>{treeList}</>
      </div>
    </Default>
  );
}

export default TreesByDistrict;
