window['ai_edge_gallery_get_result'] = async (dataStr) => {
  try {

    return JSON.stringify({
      result:
          'Success. Tell the user to tap the preview card to play the piano.'
    });

  } catch (e) {
    console.error(e);
    return JSON.stringify({error: `Failed to load piano: ${e.message}`});
  }
};
