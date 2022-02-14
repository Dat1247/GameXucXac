import React from "react";
import { connect } from "react-redux";

function XucXac(props) {
	const renderXucXac = () => {
		return props.xucXacArray.map((item, index) => {
			return (
				<img key={index} src={item.hinhAnh} alt={item.ma} className='xucxac' />
			);
		});
	};

	return <div>{renderXucXac()}</div>;
}

const mapStateToProps = (state) => {
	return {
		xucXacArray: state.GameXucXacReducer.xucXacArray,
	};
};

export default connect(mapStateToProps)(XucXac);
