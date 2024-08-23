import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { address, danger } from "../../services";

function TopBar() {
  const { t, i18n } = useTranslation();
  const [contact, setContact] = useState({});
  const [searchResult, setSearchResult] = useState([]);

  async function fetchContact() {
    const fetcher = await window.fetch(`${address()}contact-info/UK`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    setContact(response);
  }

  // handle input search
  let debounceTimeout;
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(async () => {
      try {
        const url = `${address()}global/search?keyword=${searchTerm}`;
        const response = await axios.get(url, {
          headers: { "Accept-Language": `${i18n.language}` },
        });
        console.log(
          "🚀 ~ debounceTimeout=setTimeout ~ response:",
          response.data
        );
        setSearchResult(response.data);
      } catch (error) {
        danger("Error while searching");
      }
    }, 1000);
  };

  const searchResultURL = (type, id) => {
    switch (type) {
      case "PROJECT":
        return `/single-project/${id}`;
      case "NEWS":
        return `/news/${id}`;
      case "PROGRAM":
        return `${id}`;
      case "HUB":
        return `${id}`;
      case "SUBHUB":
        return `/single-subhub/${id}`;
      case "EVENT":
        return `/events/${id}`;
      default:
        return "";
    }
  };

  useEffect(() => {
    fetchContact();
  }, [i18n.language]);

  return (
    <>
      <main>
        {/* Top bar */}
        <section className="px-4 top">
          <div className="block  grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center">
            <div className="flex justify-center px-10 grid lg:grid-cols-9 grid-cols-9 sm:grid-cols-3 gap-5 pt-8">
              <a
                className="text-center hover:text-gray-500"
                href={
                  contact.facebook ??
                  "https://web.facebook.com/Sadagaat/?_rdc=1&_rdr"
                }
                target="blank"
              >
                <svg
                  className="w-5 h-5  text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-center hover:text-gray-500"
                href={contact.twitter ?? "http://twitter.com/sadagaat"}
                target="blank"
              >
                <svg
                  className="w-5 h-5  text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-center hover:text-gray-500"
                href={
                  contact.linkedin ??
                  "http://www.linkedin.com/pub/sadagaat-sudan/54/431/5b7"
                }
                target="blank"
              >
                <svg
                  className="w-5 h-5  text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
              <a
                className="text-center hover:text-gray-500"
                href={
                  contact.youtube ??
                  "https://www.youtube.com/channel/UCRSvaVpv6Hw6eUnI6OsutSQ"
                }
                target="blank"
              >
                <svg
                  className="w-5 h-5  text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-center hover:text-gray-500"
                href={
                  contact.instagram ??
                  "https://www.instagram.com/sadagaat_organization/"
                }
                target="blank"
              >
                <svg
                  className="w-5 h-5 text-white   dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="text-center hover:text-gray-500 "
                href={contact.tiktok ?? "http://www.tiktok.com/@sadagaatsudan"}
                target="blank"
              >
                <svg
                  className="w-5 h-5  text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fillRule="evenodd"
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                  ></path>
                </svg>
              </a>
              <a
                className="text-center hover:text-gray-500 "
                href={contact.soundcloud ?? "https://soundcloud.com/sadagaat"}
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  text-white"
                  viewBox="0 0 48 48"
                >
                  <path d="M8,36.018c0.596,0,1.265,0,2,0V18.041c-1.11,1.001-1.699,2.212-2,3.121V36.018z"></path>
                  <path d="M20,17.105c-0.675-0.316-1.752-0.715-3-0.837v19.749c0.976,0,1.98,0,3,0V17.105z"></path>
                  <path d="M12,36.018c0.943,0,1.95,0,3,0V16.24c-1.173,0.03-2.171,0.23-3,0.558V36.018z"></path>
                  <path d="M48,26h-0.452c-0.863-2.403-2.93-4.301-5.476-4.835c-0.937-0.196-1.87-0.218-2.787-0.066C37.725,16.815,34.093,14,30,14	c-2.52,0-4.892,0.832-6.86,2.406c-0.724,0.579-1.14,1.44-1.14,2.362V35c0,0.552,0.447,1,1,1h18c0.105,0,0.207-0.017,0.303-0.049	c1.938-0.208,3.746-1.181,4.99-2.691c1.009-1.224,1.584-2.702,1.685-4.26H48V26z"></path>
                  <path d="M6,22.1c-0.395-0.051-0.842-0.088-1.341-0.088c-0.223,0-0.441,0.037-0.659,0.073v13.374	c0.423,0.104,0.861,0.166,1.311,0.166c0.151,0,0.393,0,0.689,0V22.1z"></path>
                  <path
                    fill="#fff"
                    d="M41.866,20.143c-1.146-0.241-2.248-0.167-3.251,0.137C37.43,16.081,34,13,30,13	c-2.359,0-4.526,0.819-6.235,2.186C23.284,15.571,23,16.152,23,16.768V33c2.385,0,4.55,0,6,0h12v-0.025	c3.607-0.275,6.393-3.488,5.954-7.255C46.637,22.996,44.549,20.707,41.866,20.143z"
                  ></path>
                  <path d="M41,34H23c-0.553,0-1-0.448-1-1V16.768c0-0.921,0.416-1.783,1.14-2.362C25.108,12.832,27.48,12,30,12	c4.093,0,7.725,2.815,9.284,7.099c0.917-0.152,1.851-0.13,2.787,0.066l0,0c3.094,0.649,5.51,3.297,5.876,6.439	c0.24,2.061-0.347,4.07-1.654,5.656c-1.244,1.51-3.053,2.482-4.99,2.691C41.207,33.983,41.105,34,41,34z M24,32h16.778	c0.047-0.011,0.096-0.019,0.146-0.022c1.482-0.113,2.877-0.838,3.826-1.99c0.958-1.162,1.388-2.637,1.211-4.153	c-0.269-2.3-2.036-4.238-4.3-4.713c-0.932-0.194-1.859-0.157-2.757,0.115c-0.255,0.079-0.534,0.049-0.77-0.08	c-0.235-0.129-0.409-0.347-0.481-0.605C36.563,16.694,33.417,14,30,14c-2.061,0-4.001,0.68-5.611,1.968	C24.142,16.166,24,16.457,24,16.768V32z"></path>
                  <path d="M2,23.413c-1.238,1.337-2,3.121-2,5.087s0.762,3.749,2,5.087V23.413z"></path>
                </svg>
              </a>
            </div>
            <div className="flex justify-center pt-8 gap-4">
              <h6 className="text-md text-white flex gap-2 text-center">
                <svg
                  className="w-5 h-5  text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                  />
                </svg>
                {`+${contact.phone ?? "44884060063"}`}{" "}
              </h6>
              <h6 className="text-md text-white flex gap-2 text-center  ">
                <svg
                  className="w-5 h-5  text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                  />
                </svg>
                {contact.email ?? "info@sadagaat-uk.org"}
              </h6>
            </div>
            <div className="grid  grid-cols-2 py-2 justify-center">
              <div className="flex lg:py-2 pt-8 col-span-2">
                <div className=" w-full justify-center ">
                  <input
                    type="text"
                    name="search"
                    id="searchQuery"
                    className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-full  border border-gray-300 "
                    placeholder={t("Search in Projects")}
                    onKeyUp={(e) => handleSearch(e)}
                  />
                  {searchResult?.length > 0 && (
                    <ul className="lg:top-16  rounded-lg shadow-md border bg-white xl:w-[450px] w-[250px] max-h-[400px] overflow-y-auto absolute z-[99] ">
                      {searchResult.map((item) => (
                        <li key={item.id}>
                          <Link
                            to={searchResultURL(item.entityType, item.id)}
                            className="px-3 py-2 block hover:bg-gray-50 text-gray-700"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default TopBar;
