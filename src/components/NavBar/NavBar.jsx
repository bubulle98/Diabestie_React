import style from "./NavBar.module.css";
import logOutIcon from "../../assets/exit.png";
import logo from "../../assets/blood.png";
import dashboard from "../../assets/dashboard.png";
import add from "../../assets/add.png";
import history from "../../assets/history.png";
import graphs from "../../assets/chart.png";
import defaultUserImg from "../../assets/user.png";
import { Link } from "react-router-dom";

const NavBar = ({
	firstName,
	lastName,
	profileImage = defaultUserImg,
	page,
}) => {
	return (
		<div className={style.navBar}>
			<p className={style.navTitle}>
				<img src={logo} alt="logo" className={style.logoIcon} />
				Diabestie
			</p>
			<ul className={style.linksList}>
				<li className={page === "dashboard" ? style.active : undefined}>
					<Link to="/">
						<img src={dashboard} alt="dashboard" />
						Dashboard
					</Link>
				</li>
				<li
					className={
						page === "addMeal1" || page === "addMeal2"
							? style.active
							: undefined
					}
				>
					<Link to="/addMeal/step1">
						<img src={add} alt="add meal" />
						New meal
					</Link>
				</li>
				<li className={page === "history" ? style.active : undefined}>
					<Link to="/history">
						<img src={history} alt="meals history" />
						Meals history
					</Link>
				</li>
				<li>
					<Link to="/">
						<img src={graphs} alt="graphs" />
						Graphs
					</Link>
				</li>
			</ul>
			<p className={style.account}>
				<img src={profileImage} alt="user picture" className={style.userIcon} />
				{firstName} {lastName}{" "}
				<img src={logOutIcon} alt="log out" className={style.logOutIcon} />
			</p>
		</div>
	);
};

export default NavBar;
