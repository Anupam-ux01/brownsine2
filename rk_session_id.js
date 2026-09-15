// Version 5.0.7
(function() {
    function nanoid(size = 21) {
        const urlAlphabet =
            "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
        let id = "";
        const bytes = crypto.getRandomValues(new Uint8Array(size));
        while (size--) {
            id += urlAlphabet[bytes[size] & 63];
        }
        return id;
    }

    const SESSION_ID_KEY = "rk_session_id";
    const CURRENT_ORIGIN = "thegleamery.com";

    function getCookie() {
        if (!document) return null;
        const raw = document.cookie
            .split(";")
            .find((c) => c.trim().startsWith(`${SESSION_ID_KEY}=`));
        if (!raw) return null;
        const value = raw.split("=")[1];
        try {
            return JSON.parse(value);
        } catch (error) {
            return null;
        }
    }

    function setCookie(value) {
        if (!document) return;
        document.cookie = `${SESSION_ID_KEY}=${JSON.stringify({
      value,
      origin: CURRENT_ORIGIN,
    })}; path=/; SameSite=Lax; domain=.thegleamery.com`;
    }

    window.getRKSessionId = function() {
        let sessionId = sessionStorage.getItem(SESSION_ID_KEY);
        if (!sessionId) {
            const sessionIdFromCookie = getCookie(SESSION_ID_KEY);
            if (sessionIdFromCookie && sessionIdFromCookie.value) {
                if (sessionIdFromCookie.origin !== CURRENT_ORIGIN) {
                    console.log("Found a session ID from another origin, using that one");
                    sessionId = sessionIdFromCookie.value;
                }
            }
        }
        if (!sessionId) {
            console.log("Created new Session ID");
            sessionId = nanoid();
        }
        sessionStorage.setItem(SESSION_ID_KEY, sessionId);
        setCookie(sessionId);
        return sessionId;
    };
})();