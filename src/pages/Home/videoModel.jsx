import React, { Component } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import axios from "axios";
import address from "../../services";
import getVideoId from "get-video-id";

class ModalVedioComponent extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      link: " ",
      video: [],
      id: "",
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  async componentDidMount() {
    try {
      const { data: video } = await axios.get(`${address()}video-config`, {
        headers: { "accept-language": `en` },
      });
      this.setState({ video });
      this.setState({ link: video.link });
      this.setState({ id: getVideoId(this.state.link) });

      console.log("the video link  ", this.state.link);
    } catch (error) {
      console.log("can not load video ...........");
    }
  }
  // get projct id from url
  async componentWillReceiveProps() {
    try {
      const { data: video } = await axios.get(`${address()}video-config`, {
        headers: { "accept-language": `en` },
      });
      this.setState({ video });
      this.setState({ link: video.link });
      this.setState({ id: getVideoId(this.state.link) });
    } catch (error) {
      console.log("can not load Contact for the contact page slider");
    }
  }

  render() {
    let link = this.state.link;
    const { id } = getVideoId(link);
    //console.log("here we go this is the youtube testttttttted link ********",link)
    //console.log("here we go this is the youtube id ********",id)

    return (
      <main>
      {this.state.isOpen && 
          <>

        {id != "" ? (
          <div 
          className="fixed z-[9999999999999] h-screen inset-0 bg-black">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId={id}
              onClose={() => this.setState({ isOpen: false })}
            />
          </div>
        ) : (
          <div 
          className="fixed z-[9999999999999] h-screen inset-0 bg-black">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="JI-1UEwo-tg"
              onClose={() => this.setState({ isOpen: false })}
            />
          </div>
        )}
            
          </>
          }

        <a onClick={this.openModal} className="modal-btn">
          <div className="pt-10 pb-10 grid grid-cols-9 justify-content-center ">
            <div className="col-span-4 cursor-pointer"></div>
            <svg
              className="cursor-pointer w-24 h-24 p-3 col-span-1 rounded-full border-2 text-white"
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
                d="M8 18V6l8 6-8 6Z"
              />
            </svg>
          </div>
        </a>
      </main>
    );
  }
}
export default ModalVedioComponent;
