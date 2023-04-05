import { useEffect, useState } from "react";
import axios from "axios";
import Default from "../Default";
import Title from "../Title";
import "./style.scss";

type treesByGender = {
  gender: string;
  count: number;
};

function TreesByGender() {
  const [trees, setTrees] = useState<treesByGender[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/treebygender")
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
      <div className="tree-list">
        <div className="tree-name">{c.gender}</div>
        <div className="tree-count">{c.count}</div>
      </div>
    ));

  return (
    <Default>
      <h1 className="section-title">
        Table contenant les genre d'arbres ainsi que le nombre de ce genre dans
        Paris
      </h1>
      <div className="gender-wrapper">
        <Title gender="Genre" count="Arbre appartenant au genre" />
        <>{treeList}</>
      </div>
    </Default>
  );
}

export default TreesByGender;
