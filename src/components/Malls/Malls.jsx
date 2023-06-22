import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoGetApis } from "../../Apis/Apis";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "../../App.css";

function Malls() {
  const [malls, setMalls] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoad(true);
      let response = await TodoGetApis.GetMalls(10);
      setMalls(response.data.rows);
      setLoad(false);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row flex  items-center f_flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="gray"
                d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"
              />
            </svg>
            <h2>Centros Comerciales</h2>
          </div>
          <div
            className="container-see "
            onClick={() => {
              window.location.href = "/AllMalls";
            }}
          >
            <span>Ver Todas </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.7 15.3q-.475.475-1.087.213T10 14.575v-5.15q0-.675.613-.938T11.7 8.7l2.6 2.6q.15.15.225.325T14.6 12q0 .2-.075.375t-.225.325l-2.6 2.6Z"
              />
            </svg>
          </div>
        </div>
      </div>
      {load === false ?  (
        <div className=" flex justify-center items-center gap-6 my-10 ">
          <div className="boxMalls flex flex-col items-center ">
            <div className="rounded-full h-full overflow-clip  ">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden ">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
          <div className="boxMalls flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
              <Skeleton width={140} height={140} count={1} />
            </div>
            <Skeleton width={100} />
          </div>
        </div>
      ) : (
        <>
          {malls.length > 0 ? (
            <div className="mallsResponsive  flex justify-center items-center gap-6 my-10">
              {malls.map((x) => (
                <div
                  className="boxMalls flex flex-col items-center "
                  key={x.email_admin}
                >
                  <div
                    className="imgMalls object-cover"
                    onClick={() => {
                      navigate(
                        `/OfficialStores/${x.id_admin}/0/${x.name_admin}`
                      );
                    }}
                  >
                    <img src={x.img_admin} alt="" />
                  </div>
                  <h4 className="mt-4 text-gray-700 text-lg">{x.name_admin}</h4>
                </div>
              ))}
            </div>
          ) : (
            <h1>No hay centros comerciales</h1>
          )}
        </>
      )}
    </>
  );
}

export default Malls;
