interface Buttons {
	[key: string]: string;
}
export const buttons: Buttons = {
	pause: '',
	play: '',
	more: '',
	explicit:
		'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 6h-3v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1z',
	speakerFill:
		'M11.4289 18.1015C11.7544 18.1015 12.0197 17.9974 12.2248 17.789C12.4299 17.5807 12.5325 17.3203 12.5325 17.0078V2.02734C12.5325 1.70833 12.4283 1.43652 12.22 1.21191C12.0117 0.987305 11.7415 0.875 11.4094 0.875C11.1815 0.875 10.9765 0.927083 10.7942 1.03125C10.6119 1.13542 10.3971 1.30794 10.1497 1.54883L5.9895 5.45507C5.92439 5.51367 5.84301 5.54296 5.74536 5.54296H2.94263C2.28508 5.54296 1.78052 5.72363 1.42896 6.08496C1.07739 6.44629 0.901611 6.97852 0.901611 7.68164V11.3144C0.901611 12.0241 1.07739 12.558 1.42896 12.916C1.78052 13.2741 2.28508 13.4531 2.94263 13.4531H5.74536C5.84301 13.4531 5.92439 13.4824 5.9895 13.541L10.1497 17.4863C10.371 17.7012 10.5826 17.8574 10.7844 17.955C10.9862 18.0527 11.201 18.1015 11.4289 18.1015Z',
	speakerWave3:
		'M11.1868 18.8785C11.5123 18.8785 11.7776 18.7743 11.9827 18.566C12.1878 18.3577 12.2904 18.0972 12.2904 17.7847V2.80426C12.2904 2.48526 12.1862 2.21345 11.9779 1.98883C11.7696 1.76423 11.4994 1.65192 11.1673 1.65192C10.9394 1.65192 10.7343 1.70401 10.5521 1.80817C10.3698 1.91234 10.1549 2.08487 9.90753 2.32575L5.74738 6.232C5.68227 6.2906 5.60089 6.31989 5.50323 6.31989H2.7005C2.04295 6.31989 1.53839 6.50056 1.18683 6.86188C0.835266 7.22321 0.659485 7.75544 0.659485 8.45856V12.0914C0.659485 12.801 0.835266 13.3348 1.18683 13.6929C1.53839 14.051 2.04295 14.23 2.7005 14.23H5.50323C5.60089 14.23 5.68227 14.2593 5.74738 14.3179L9.90753 18.2632C10.1289 18.4781 10.3405 18.6343 10.5423 18.732C10.7441 18.8297 10.9589 18.8785 11.1868 18.8785ZM15.7669 14.4156C15.9362 14.5263 16.1217 14.5637 16.3236 14.5279C16.5254 14.4921 16.6914 14.3798 16.8216 14.191C17.1992 13.6962 17.4938 13.1037 17.7054 12.4136C17.917 11.7235 18.0228 11.0042 18.0228 10.2554C18.0228 9.50674 17.917 8.78734 17.7054 8.09723C17.4938 7.40713 17.1992 6.81469 16.8216 6.31989C16.6914 6.13109 16.5254 6.01716 16.3236 5.97809C16.1217 5.93903 15.9362 5.9781 15.7669 6.09528C15.5716 6.232 15.4593 6.40941 15.43 6.62751C15.4007 6.84561 15.4642 7.05557 15.6204 7.25739C15.9069 7.64802 16.1266 8.10375 16.2796 8.62458C16.4326 9.14542 16.5091 9.68904 16.5091 10.2554C16.5091 10.8218 16.431 11.3638 16.2747 11.8814C16.1185 12.399 15.9004 12.8564 15.6204 13.2535C15.4707 13.4618 15.4088 13.6734 15.4349 13.8882C15.461 14.1031 15.5716 14.2789 15.7669 14.4156ZM19.3997 16.9644C19.582 17.0816 19.7741 17.1223 19.9759 17.0865C20.1777 17.0507 20.3437 16.9384 20.474 16.7496C21.099 15.8902 21.5856 14.8941 21.9339 13.7613C22.2822 12.6285 22.4564 11.4599 22.4564 10.2554C22.4564 9.05101 22.2839 7.87913 21.9388 6.73981C21.5937 5.60049 21.1055 4.60765 20.474 3.76129C20.3437 3.57249 20.1777 3.45856 19.9759 3.4195C19.7741 3.38044 19.582 3.42275 19.3997 3.54645C19.224 3.67015 19.1214 3.83454 19.0921 4.03962C19.0628 4.2447 19.1198 4.44815 19.263 4.64997C19.7969 5.40518 20.2103 6.26781 20.5033 7.23786C20.7962 8.20792 20.9427 9.21378 20.9427 10.2554C20.9427 11.2971 20.7946 12.3013 20.4984 13.2681C20.2021 14.2349 19.7903 15.0992 19.263 15.8609C19.1263 16.0627 19.0709 16.2661 19.097 16.4712C19.1231 16.6763 19.224 16.8407 19.3997 16.9644ZM23.0618 19.5523C23.2311 19.676 23.4199 19.715 23.6283 19.6695C23.8366 19.6239 24.0058 19.5035 24.1361 19.3082C24.709 18.4813 25.1989 17.5878 25.6058 16.6275C26.0127 15.6672 26.3252 14.6532 26.5433 13.5855C26.7614 12.5178 26.8704 11.4078 26.8704 10.2554C26.8704 9.1031 26.7597 7.99307 26.5384 6.92536C26.3171 5.85765 26.0013 4.84365 25.5911 3.88337C25.181 2.92309 24.696 2.02953 24.1361 1.2027C24.0058 1.00088 23.8366 0.878811 23.6283 0.836493C23.4199 0.794175 23.2311 0.834865 23.0618 0.958563C22.8795 1.08226 22.7754 1.24828 22.7493 1.45661C22.7233 1.66494 22.7787 1.87002 22.9154 2.07184C23.4167 2.82054 23.8512 3.62621 24.2191 4.48883C24.5869 5.35147 24.8717 6.26618 25.0736 7.23297C25.2754 8.19977 25.3763 9.20726 25.3763 10.2554C25.3763 11.2971 25.2754 12.3013 25.0736 13.2681C24.8717 14.2349 24.5869 15.1529 24.2191 16.022C23.8512 16.8911 23.4167 17.6968 22.9154 18.439C22.7787 18.6343 22.7233 18.8378 22.7493 19.0494C22.7754 19.261 22.8795 19.4286 23.0618 19.5523Z'
};
