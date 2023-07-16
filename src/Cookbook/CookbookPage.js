import React, { useEffect, useState } from "react";
import SanityCookbook from "./SanityCookbook";
import { useUser } from "@clerk/clerk-react";

const Cookbook = () => {
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    const storedAuthorName = localStorage.getItem("authorName");
    if (storedAuthorName) {
      setAuthorName(storedAuthorName);
    }
  }, []);

  const user = useUser();
  if (user && user.user && user.user.username && authorName === "") {
    setAuthorName(user.user.username);
    localStorage.setItem("authorName", user.user.username);
  }

  return (
    <div>
      <SanityCookbook name={authorName} />
    </div>
  );
};

export default Cookbook;
