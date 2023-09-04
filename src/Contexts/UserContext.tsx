import axios from "axios";
import { createContext, useState } from "react";
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
type UserContextType = {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
};
type UserContextProps = {
  children: React.ReactNode;
};
export const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider: React.FC<UserContextProps> = (props) => {
  const getUser = async () => {
    const user = await axios("https://jsonplaceholder.typicode.com/users/1");
    return user.data;
  };
  const [user, setUser] = useState<UserData | null>(getUser());
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
