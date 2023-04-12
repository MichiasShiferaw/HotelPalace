import React, { useContext, useEffect } from 'react'
import { CustomersContext } from '../Contexts/CustomersContext';
import api from '../apis/apiIndex';


const HCBanner = () => {
  const {infos, setInfos}= useContext(CustomersContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/emp/get-chains`);
        setInfos(response.data.data.chain)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="pt-5 pb-4 bg-primary text-center text-white bg-opacity-50">
      <div className="container px-xl-0">
        <div className="row justify-content-center">
          <h2 className="fs-2 col-lg-8">Our Great Hotel Chains</h2>
          <div className="col-lg-8 mt-25 mb-55 fs-4 medium op-7 text-adaptive">
            <div>{"{Sample Lines}"}</div>
          </div>
        </div>
        <div className="container">
          <div className="row gap-3 justify-content-center">
            {infos && infos.map((hotel_chains)=>{
              return (
                <div className="col-lg-3 col-md-5 col-sm-6 mw-270" key={hotel_chains.chain_name}>
                  <div className="mx-auto my-2 d-flex justify-content-center align-items-center block">
                    <h3>{hotel_chains.chain_name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HCBanner;