export interface Headers {
  cookie?: string;
}

export const cookieLogger = (headers: Headers) => {
  if (!headers.cookie) {
    console.log("Cookies: null");
  } else {
    console.log(`Cookies: ${headers.cookie}`);
  }
};
