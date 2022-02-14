import { DAT_CUOC, PLAY_GAME } from "../types/GameXucXacType";

const initialState = {
	winGame: 0,
	totalGame: 0,
	taiXiu: true,
	xucXacArray: [
		{ ma: 6, hinhAnh: "./game_xuc_xac_img/6.png" },
		{ ma: 6, hinhAnh: "./game_xuc_xac_img/6.png" },
		{ ma: 6, hinhAnh: "./game_xuc_xac_img/6.png" },
	],
};

export const GameXucXacReducer = (state = initialState, action) => {
	switch (action.type) {
		case DAT_CUOC: {
			state.taiXiu = action.taiXiu;
			return { ...state };
		}
		case PLAY_GAME: {
			let mangXucXacNgauNhien = [];
			for (let i = 0; i < 3; i++) {
				let soNgauNhien = Math.floor(Math.random() * 6) + 1;
				let xucXacNgauNhien = {
					ma: soNgauNhien,
					hinhAnh: `./game_xuc_xac_img/${soNgauNhien}.png`,
				};
				mangXucXacNgauNhien.push(xucXacNgauNhien);
			}
			state.xucXacArray = mangXucXacNgauNhien;

			state.totalGame = state.totalGame + 1;

			let tongDiem = mangXucXacNgauNhien.reduce((tong, item, index) => {
				return (tong += item.ma);
			}, 0);
			if (
				(tongDiem > 11 && state.taiXiu) ||
				(tongDiem <= 11 && !state.taiXiu)
			) {
				state.winGame += 1;
			}

			return { ...state };
		}
		default:
			return state;
	}
};
