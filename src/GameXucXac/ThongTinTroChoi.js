import React from "react";
import { connect } from "react-redux";

function ThongTinTroChoi(props) {
	return (
		<div>
			<p>
				BẠN CHỌN:{" "}
				<span className='text-danger'>{props.taiXiu ? "TÀI" : "XỈU"}</span>{" "}
			</p>
			<p>
				Số bàn thắng: <span className='text-success'>{props.winGame}</span>
			</p>
			<p>
				Tổng số bàn chơi:{" "}
				<span className='text-warning'>{props.totalGame}</span>
			</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		taiXiu: state.GameXucXacReducer.taiXiu,
		winGame: state.GameXucXacReducer.winGame,
		totalGame: state.GameXucXacReducer.totalGame,
	};
};

export default connect(mapStateToProps)(ThongTinTroChoi);
