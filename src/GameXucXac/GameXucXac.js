import React from "react";
import { connect } from "react-redux";
import { DAT_CUOC, PLAY_GAME } from "../redux/types/GameXucXacType";
import "./GameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";

function GameBauCua(props) {
	let classTai = props.taiXiu ? "game_play_tai" : "";
	let classXiu = !props.taiXiu ? "game_play_xiu" : "";

	return (
		<div
			className='game'
			style={{ backgroundImage: "url('./game_xuc_xac_img/bgGame.png')" }}>
			<h1 className='my-5 text-center display-4'>GAME ĐỖ XÚC XẮC</h1>
			<div className='game_play row text-center mt-3'>
				<div className='col-4 col-lg-5'>
					<button
						className={"game_play_choose " + classTai}
						onClick={() => {
							props.datCuoc(true);
						}}>
						TÀI
					</button>
				</div>
				<div className='game_play-xucxac col-4 col-lg-2'>
					<XucXac />
				</div>
				<div className='col-4 col-lg-5'>
					<button
						className={"game_play_choose " + classXiu}
						onClick={() => {
							props.datCuoc(false);
						}}>
						XỈU
					</button>
				</div>
			</div>
			<div className='game-result text-center mt-4'>
				<ThongTinTroChoi />

				<button
					className='btn btn-success'
					onClick={() => {
						props.playGame();
					}}>
					PLAY GAME
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		taiXiu: state.GameXucXacReducer.taiXiu,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		datCuoc: (taiXiu) => {
			dispatch({
				type: DAT_CUOC,
				taiXiu,
			});
		},
		playGame: () => {
			dispatch({
				type: PLAY_GAME,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua);
