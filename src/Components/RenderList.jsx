// import React, { useEffect, useState } from "react";
// import Card from "./Card";

// const NameCardList = ({url,rerender}) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setData(data.results ));
//   }, [rerender]);


  
  
//   return (
//     <div className="display">
//       {data.map((item) => (
//         <Card  name={item.title?item.title:item.name} value={item.poster_path} rating={item.vote_average} desc={item.overview}/>
//       ))}
//     </div>
//   );
// };

// export default NameCardList;

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const NameCardList = ({url,rerender}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results );
        setTimeout(()=>{
          setLoading(false);
        },1000)
        
      });
  }, [url, rerender]);

  return (
    <div className="display">
      {loading ? <Loader /> : (
        data.map((item) => (
          <Card name={item.title ? item.title : item.name} value={item.poster_path} rating={item.vote_average} desc={item.overview} />
        ))
      )}
    </div>
  );
};

export default NameCardList;