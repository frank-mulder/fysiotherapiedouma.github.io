CMS.registerEditorComponent({
    id: "headerimage",
    label: "Headerimage",
    fields: [
      {
        name: "src",
        label: "src",
        widget: "string",
      },
      {
        name: "title",
        label: "Title",
        widget: "string"
      },
      {
        name: "button1_txt",
        label: "Button 1 Text",
        widget: "string"
      },
      {
        name: "button1_url",
        label: "Button 1 URL",
        widget: "string"
      },
      {
        name: "header_txt",
        label: "Header text",
        widget: "markdown"
      },
    ],
    pattern: /{{< headerimage src="(.*?)" title="(.*?)" button1="(.*?)" button1link="(.*?)" >}}([\s\S]*?){{< \/headerimage >}}/,
    fromBlock: function(match) {
        return {
            src: match[1],
            title: match[2],
            button1_txt: match[3],
            button1_url: match[4],
            header_txt: match[5]
        };
    },
    toBlock: function(obj) {
        return `{{< headerimage src="${obj.src}" title="${obj.title}" button1="${obj.button1_txt}" button1link="${obj.button1_url}" >}}${obj.header_txt}{{< /headerimage >}}`;
    },
    toPreview: function(obj) {
        return `
        <div class="hero">
          <img class="hero__img" src="/${obj.src}" title="${obj.title}" />
          <div class="hero__overlay hero__overlay--md"></div>
          <div class="hero__content">
            <h1 class="hero__title">${obj.title}</h1>
            <div><p class="hero__text">${obj.header_txt}</p></div>
            <a class="btn hero__btn btn-primary" href="${obj.button1_url}">${obj.button1_txt}</a>
          </div>
        `;
    },
});
