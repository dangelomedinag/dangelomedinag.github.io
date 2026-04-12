const STORAGE_KEY = 'work_tracker_data1';

function getData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}


window['ai_edge_gallery_get_result'] = async (dataStr) => {
  const input = JSON.parse(dataStr)
  const action = input.action
  const amount = input.amount
  const date = input.date
  const allData = getData();
  //allData.push({amount, date, action})
  console.log(allData)
  //saveData(allData)


  try {
    // Points the app directly to your local UI!
    const fullUrl = `ui.html?v=${Date.now()}&data=${JSON.stringify(getData())}`;

    return JSON.stringify({
      webview: {url: fullUrl},
      result: JSON.stringify({
        action
      })
    });

  } catch (e) {
    console.error(e);
    return JSON.stringify({error: `Failed to load piano: ${e.message}`});
  }
};
