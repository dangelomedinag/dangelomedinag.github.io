const KEY_COUNT = Symbol("count")


window['ai_edge_gallery_get_result'] = async (dataStr) => {
  const action = dataStr.action
  const amount = dataStr.amount
  const date = dataStr.date

  try {
    // Points the app directly to your local UI!
    const fullUrl = `ui.html?v=${Date.now()}&data=${JSON.stringify({amount,date, action})}`;

    return JSON.stringify({
      webview: {url: fullUrl},
      result: JSON.stringify({
        action,
        dataStr
      })
    });

  } catch (e) {
    console.error(e);
    return JSON.stringify({error: `Failed to load piano: ${e.message}`});
  }
};
