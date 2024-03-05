/* Contains functions that are used over the project repeatdely.. */

export const getJSON = async function (url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status}) - Invalid ID requested!!`);
        return data;
    }
    catch (err) {
        throw err;
    }
}