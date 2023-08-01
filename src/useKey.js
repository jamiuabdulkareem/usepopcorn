import { useEffect } from "react";

export function useKey(key, action) {
  // Close movie with escape key
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // Clean event
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
