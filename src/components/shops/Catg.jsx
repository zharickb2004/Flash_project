import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TodoGetApis } from "../../Apis/Apis";

const Catg = () => {
  const [idStore, setIdStore] = useState(0);
  const [stores, setStores] = useState([]);
  const [name, setName] = useState();
  const [stop, setStop] = useState(true);

  const { code } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (stop) {
        let response = await TodoGetApis.GetStoresMall(code, idStore);
        setStores(response.data.data);
        setStop(false);
      }
    })();
  }, [code, idStore, stop]);

  useEffect(() => {
    const fetchData = async () => {
      if (idStore !== 0) {
        window.location.href = `/OfficialStores/${code}/${idStore}/${name}`;
      }
    };
    fetchData();
  }, [idStore, navigate, name, code]);

  return (
    <>
      <div className="categoryBi sticky">
        <div className="chead d_flex">
          <h1 className="text-5xl font-bold">Tiendas </h1>
        </div>
        {stores.length > 0 ? (
          <>
            {stores.map((y) => {
              return (
                <div
                  className="flex w-[100%] items-center"
                  onClick={() => {
                    setIdStore(y.id_store);
                    setName(y.name_store);
                  }}
                >
                  <div className="w-[70px] my-3">
                    <img src={y.img_store} alt="" />
                  </div>
                  <span className="ml-4 font-bold">{y.name_store}</span>
                </div>
              );
            })}
          </>
        ) : (
          <h1>No hay tiendas</h1>
        )}
      </div>
    </>
  );
};

export default Catg;
