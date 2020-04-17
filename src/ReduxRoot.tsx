
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; //  数据持久化
import App from "./App";
import configureStore from "./configureStore";

const { persistor, store } = configureStore();

export function ReduxRoot() {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<App />
			</PersistGate>
		</Provider>
	);
}
