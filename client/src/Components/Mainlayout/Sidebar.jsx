import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { getUserfromLocalStorage } from '../../Utils/Utils'
function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("home");
  const currentUser = getUserfromLocalStorage
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container-fluid side">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto"
            >
              <span className="fs-5 d-none d-sm-inline">
                {" "}
                <h1 className="brand-logo text-center">Instagram</h1>
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li
                className={`nav-item ${
                  selectedItem === "home" ? "selected" : ""
                }`}
              >
                <a
                  href="/home"
                  className="nav-link align-middle px-0"
                  onClick={() => handleItemClick("home")}
                >
                  <HomeIcon className="fs-4" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>

              <li
                className={`nav-item ${
                  selectedItem === "search" ? "selected" : ""
                }`}
              >
                <a
                  href="/search"
                  className="nav-link align-middle px-0"
                  onClick={() => handleItemClick("search")}
                >
                  <SearchIcon className="fs-4" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Search</span>
                </a>
              </li>

              <li
                className={`nav-item ${
                  selectedItem === "explore" ? "selected" : ""
                }`}
              >
                <a
                  href="/explore"
                  className="nav-link align-middle px-0"
                  onClick={() => handleItemClick("explore")}
                >
                  <ExploreIcon className="fs-4" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Explore</span>
                </a>
              </li>

              <li
                className={`nav-item ${
                  selectedItem === "reels" ? "selected" : ""
                }`}
              >
                <a
                  href="/Reels"
                  className="nav-link align-middle px-0"
                  onClick={() => handleItemClick("reels")}
                >
                  <SlideshowIcon className="fs-4" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Reels</span>
                </a>
              </li>

              <li
                className={`nav-item ${
                  selectedItem === "messages" ? "selected" : ""
                }`}
              >
                <a
                  href="/messages"
                  className="nav-link align-middle px-0"
                  onClick={() => handleItemClick("messages")}
                >
                  <SendIcon className="fs-4" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Messages</span>
                </a>
              </li>

              <li
                className={`nav-item ${
                  selectedItem === "notifications" ? "selected" : ""
                }`}
              >
                <a
                  href="/notifications"
                  className="nav-link align-middle px-0"
                  onClick={() => handleItemClick("notifications")}
                >
                  <FavoriteBorderIcon className="fs-4" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Notifications</span>
                </a>
              </li>

              <li
                className={`nav-item ${
                  selectedItem === "create" ? "selected" : ""
                }`}
              >
                <a
                  href="/createPosts"
                  className="nav-link align-middle px-0"
                  onClick={() => handleItemClick("create")}
                >
                  <AddBoxOutlinedIcon className="fs-4" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Create</span>
                </a>
              </li>

              <li
                className={`nav-item ${
                  selectedItem === "profile" ? "selected" : ""
                }`}
              >
                <a
                  href="/profile"
                  className="nav-link align-middle px-0"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => handleItemClick("profile")}
                >
                  <img
                    src={currentUser.pic}
                    alt="img"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">Profile</span>
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col py-3"></div>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default Sidebar;
