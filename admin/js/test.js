CMS.registerEditorComponent({
    id: "button",
    label: "Button",
    fields: [
      {
        name: "btn_type",
        label: "Type",
        widget: "string"
      },
      {
        name: "btn_class",
        label: "Class",
        widget: "string"
      },
      {
        name: "btn_link",
        label: "URL",
        widget: "string"
      },
      {
        name: "btn_text",
        label: "Text",
        widget: "string"
      }
    ],
    pattern: /{{< button type="(.+)" class="(.+)" link="(.+)" >}}(.+){{< \/button >}}/,
    fromBlock: function(match) {
        return {
            btn_type: match[1],
            btn_class: match[2],
            btn_link: match[3],
            btn_text: match[4]
        };
    },
    toBlock: function(obj) {
        return `{{< button type="${obj.btn_type}" class="${obj.btn_class}" link="${obj.btn_link}" >}}${obj.btn_text}{{< /button >}}`;
    },
    toPreview: function(obj) {
        return `<a role="button" class="btn btn-${obj.btn_type} ${obj.btn_class}" href="${obj.btn_link}">${obj.btn_text}</a>`;
    },
});
