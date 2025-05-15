import React from "react";

const Logo = () => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex items-center justify-center">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-pink-300 to-red-400 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
          <div className="w-6 h-3 bg-white rounded-full mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;