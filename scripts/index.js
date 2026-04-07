const KEY_COUNT = Symbol("count")


window['ai_edge_gallery_get_result'] = async (dataStr) => {
  const input = JSON.parse(dataStr)
  const action = input.action
  const amount = input.amount
  const date = input.date

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
