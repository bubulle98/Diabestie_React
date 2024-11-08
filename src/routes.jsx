import App from "./App";
import Dashboard from "./pages/Dashboard";
import AddMeal1 from "./pages/AddMeal1";
import AddMeal2 from "./pages/AddMeal2";
import History from "./pages/History";

const routes = [
	{
		path: "",
		element: <App />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: "addMeal/step1",
				element: <AddMeal1 />,
			},
			{
				path: "addMeal/step2",
				element: <AddMeal2 />,
			},
			{
				path: "history",
				element: <History />,
			},
		],
	},
];

export default routes;
