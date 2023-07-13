const pathBase = () => {
    let path_url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : `http://${process.env.VERCEL_URL}`;

    return path_url;
}

export default pathBase;