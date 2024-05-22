import React, { useState, useEffect, useRef } from "react";
import address from "../../services";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";


/**
 * This component showing all Sub Hubs related to specific hub
 * @component
 * @param {object} props  props recived from specific hub
 *  @example @see http://sadagaat-uk.org/water
 */

const Hub_Subhubs = (props) => {
  const [subhub, setSubhubs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // how meny subhubs dispaly per page
  const [postsPerPage] = useState(6);
  const hubId = props.hubId;
  const { t } = useTranslation();

  /**  useEffect call SubHubs() function when component mounted or  when recived props
   */
  useEffect(() => {
    SubHubs();
  }, [props]);

  /**
   * This function return All SubHubs returned by the API
   * @return {Array} array  of subhubs returned by the API
   */
  async function SubHubs() {
    const fetcher = await window.fetch(`${address()}subHubs`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    /**
     * const filteredSubhubs = array  of  all sub hubs with specific hub
     * its filter the subhubs returned from an APIS when subhub.hubId === hubId
     */
    const filteredSubhubs = response.filter((subhub) => subhub.hubId === hubId);
    setSubhubs(filteredSubhubs);
  }

  // Get current subhubs  for pagination module
  const currentPosts = subhub.slice(offset, offset + postsPerPage);

  // Change page paginate change current page of pagenation  and change the value of offset
  const paginate = (e) => {
    setCurrentPage(e.selected);
    setOffset(e.selected * postsPerPage);
  };

  return (
    <div>
      <div className=" pt-6">
          <h3 className="text-left text-xl font-bold pb-4 text-gray-900">{props.name}</h3>
          <hr className="sectors " />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-9">
            {currentPosts.map((sub_hub) => (
              <div className="col-span-1 border border-2  " key={sub_hub.id}>
                <div className="causes bg-white mb-30" >
                  <Link to={"/single-subhub/" + sub_hub.id}>
                    <div className="thumb">
                      <img
                        src={`${address()}subHubs/${sub_hub.id}/image`}
                        className="img-fullwidth"
                        />
                    </div>
                    <div className="causes-details py-5 px-5">
                      <h4 className="text-left text-md font-bold pt-4 text-gray-900 uppercase ">{sub_hub.name}</h4>

                      {/* <Link to={'/sub_hubs/'+sub_hub.id}
                className="btn btn-default btn-theme-colored btn-xs font-16 mt-10">
                  {t('Donate')}
                </Link> */}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* // pagination doesnt appear untile the subhubs length being more than 6  postPerPage */}

    </div>
  );
};
export default Hub_Subhubs;
