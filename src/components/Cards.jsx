import Card from "./Card";

export default function Cards(props) {
  // [{},{},{},{},{},{},{},{}, {},{}]
  //  pj
  // pj === "personaje"
  console.log("cards", props.characters);

  return (
    <div>
      {props.characters.map((pj) => (
        <Card
          key={pj.id}
          name={pj.name}
          species={pj.species}
          onClose={() => window.alert("Soy la funcion onClose")}
          gender={pj.gender}
          status={pj.status}
          image={pj.image}
          origin={pj.origin.name}
        />
      ))}
    </div>
  );
}

// name,
// species,
// onClose,
// gender,
// status,
// origin,
// image,
