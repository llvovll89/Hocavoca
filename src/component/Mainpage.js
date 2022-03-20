import React from "react";
import "./Mainpage.css";
import { Link } from "react-router-dom"
export default function Mainpage(){
    return <>
        <div className="main_page">
            <div className="main_container">
                <div className="main_content">
                <Link to ="/">
                    <h1>Hoca영단어</h1>
                    <hr />
                    <p className="sub_title">
                        매일매일 기록하고 증진하는 영단어<br />
                        까먹지않고 공부하세요!
                    </p>
                    </Link>
                </div>
            </div>
        </div>
    </>
}