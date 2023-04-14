const URL = "https://rickandmortyapi.com/api/character/";

export const apiFetch = async (params: string) => {
  try {
    const endpoint = URL + params;
    const dataResult = await fetch(endpoint, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!dataResult.ok) {
      throw await dataResult.json();
    }

    const dataJson = await dataResult.json();
    if (!!dataJson.error) {
      throw dataJson.error;
    }
    return dataJson;
  } catch (error) {
    console.log("Error-API", { error });
    throw error;
  }
};
