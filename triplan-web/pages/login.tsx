import Link from "next/link";
import classes from "../styles/Login.module.css";
import { useState } from "react";
const login = () => {
	const [showPassword, setShowPassword] = useState("password");
	const toggleShowPassword = () => {
		if (showPassword === "password") setShowPassword("text");
		else setShowPassword("password");
	};
	return (
		<div className='grid place-items-center h-screen'>
			<div className='flex flex-col text-black gap-5 '>
				<div className='font-extrabold text-[5rem]'>Triplan</div>

				<div className='flex flex-col text-xl '>
					<label htmlFor='usernameInput' className='font-bold'>
						Username
					</label>
					<div className={classes.shadowSolidInput}>
						<input
							id='usernameInput'
							className='border-4 border-black rounded-lg p-2 text-2xl'
							placeholder='Username'
						/>
					</div>
				</div>

				<div className={"flex flex-col text-xl"}>
					<label htmlFor='passwordInput' className='font-bold'>
						Password
					</label>
					<div className={classes.shadowSolidInput}>
						<input
							className='border-4 border-black rounded-lg p-2 text-2xl'
							placeholder='Password'
							type={showPassword}
						/>
					</div>
					<div className='flex flex-row gap-2 mt-2 ml-1'>
						<input
							type='checkbox'
							id='showPassword'
							onChange={toggleShowPassword}
						/>
						<label htmlFor='showPassword'>Show password</label>
					</div>
				</div>
				<Link href='/'>
					<div className={classes.shadowSolidBtn}>
						<button className='border-4 border-black rounded-lg p-2 text-2xl bg-amber-300 hover:bg-amber-500 w-full '>
							Log in
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
};
export default login;
