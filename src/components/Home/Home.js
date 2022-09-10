import React, {useEffect, useState} from "react";
import "./Home.scss";
import {connect} from 'react-redux';
import {Routes} from "react-router-dom";
import ivankillson from "../../img/ivankillson.jpg";
import $ from "jquery";
import Body_toggle from "./body";
import InputClass from "../../sublimate/input";


const body = new Body_toggle;
const cj = "cj_shit.mp3";
const em_lose_yourself = "eminem_-_lose-yourself.m4a";
const sting_every_breath = "Sting - Every Breath You Take.mp3";
const morgenshtern_why = "morgenshtern_why.mp3";

const player = new Audio();
const input = new InputClass();
player.autoplay = false;
player.muted = false;
body.hidden();


function Home() {
    let volume = $(document).find('.volume');

    const input_volume = input.init(50);
    const [curTrack, setCurTrack] = useState(cj);
    const [playing, setPlaying] = useState(false);
    useEffect(()=>{
        player.addEventListener('ended', () => {setPlaying(false)});
        },        [player]);
    useEffect(()=>{
        player.volume = input_volume.val / 100;
    },        [input_volume.val]);

    const play = (track = curTrack)=>{
        setCurTrack(track);
        import(`../../sounds/${track}`).then((sound) => {
            player.src = sound.default;
            player.load();
            player.play();
            setPlaying(true);
        }).catch((error) => {console.log('import ERROR: ', error)});
    };
    const fadeOutCurtain = (delay = 4000)=>{setTimeout(()=>{
        $(document).find('.curtain').addClass('fadeOutLeft');
        body.visible();
        }, delay)};
    const fadeOutTitleComment = ()=>{setTimeout(()=>{
        $(document).find('.title_comment').fadeOut(1000);
    }, 200)};
    const fadeInButtons = (delay = 6000)=>{setTimeout(()=>{
        let buttons = $(document).find('.buttons');
        $(buttons).fadeIn(2000);
        setTimeout(()=>{$(buttons).css({'display': 'grid'})}, 0);
        $(buttons).addClass('show_buttons');
        $(volume).fadeIn(500);
    }, delay)};
    const img_width = (delay = 6000)=>{setTimeout(()=>{
        $(document).find('.img_main').css({'width': '92%'});
    }, delay)};
    const toggle_player = ()=>{
        console.log('toggle');
        setPlaying(!playing);
        if(playing){
            player.pause();
        }else{player.play()}
    };
    setTimeout(()=>{fadeOutCurtain();}, 1000);
    setTimeout(()=>{fadeInButtons();}, 4000);
    setTimeout(()=>{img_width();}, 2000);


    return(<div className={`Home`}>
        <div className="IvanKillSon"
        >
            <img className={`img_main`} src={ivankillson} alt="BoH & Invisible" draggable={false}
            />

            <div className="buttons">
                <div className="btn btn-outline-warning"
                onClick={()=>{
                    play(em_lose_yourself);
                }}
                >Invisible</div>
                <div className="btn btn-outline-warning"
                onClick={()=>{
                    play(sting_every_breath);
                }}
                >BoHpts</div>
                <div className="btn btn-outline-warning"
                onClick={()=>{
                    play(morgenshtern_why);
                }}
                >Admэ</div>
                <div className="btn btn-danger stop" onClick={()=>{toggle_player()}}>{playing ? 'Pause' : 'Play'}</div>
            </div>
        </div>
        <div className="curtain"
        onClick={()=>{
            fadeOutCurtain(1200);
            fadeOutTitleComment();
            fadeInButtons(7000);
            img_width(5000);
            play();
        }}
        ><div className="title_comment"><div className="span1">click.</div><div className="span2">ore not</div></div></div>
        <div className="ps">если я кого то этим обидел... <br/>не обижайтесь</div>
        <div className="volume">volume <br/>
            <input type="number"
                   value={input_volume.val}
                   onChange={(e)=>{
                       if(0 <= e.target.value && e.target.value <= 100){
                           console.log(e.target.value);
                           input_volume.onChange(e);
                       }
                   }}
            />
        </div>
    </div>);
}


function mapStateToProps(state){
    return {
        prop: state.app.prop,
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Home);