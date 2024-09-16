import { UserProps } from "../types/user";

import Search from "../components/Search";

import { useState } from "react";
import User from "../components/User";
import { Error } from "../components/Error";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async(userName: string) => {
    setIsLoading(true);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data)

    const { avatar_url, login, location, followers, following, status } = data;

    const userData: UserProps = {
      avatar_url, 
      login, 
      location, 
      followers, 
      following
    };

    setUser(userData);
    setError(status);
    setIsLoading(false);
  };


  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {  error ? <Error /> : (user ? <User {...user} /> : null) }
    </div>
  )
};

export default Home;