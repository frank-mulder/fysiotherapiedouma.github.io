CMS.registerEditorComponent({
    id: "twotone",
    label: "Twotone",
    fields: [
      {
        name: "style",
        label: "Style",
        widget: "select",
        options: ["p-sm","p-l"],
        default: "p-sm"
      },
      {
        name: "left",
        label: "Left",
        widget: "markdown"
      },
      {
        name: "leftcolor",
        label: "Left background color",
        widget: "string",
        default: ""
      },
      {
        name: "right",
        label: "Right",
        widget: "markdown"
      },
      {
        name: "rightcolor",
        label: "Right background color",
        widget: "string",
        default: ""
      },
    ],
    pattern: /{{< twotone style="(.+?)" >}}{{< twotoneleft color="(.+?)" >}}([\s\S]*?){{< \/twotoneleft >}}{{< twotoneright color="(.+?)" >}}([\s\S]*?){{< \/twotoneright >}}{{< \/twotone >}}/,
    fromBlock: function(match) {
        return {
            style: match[1],
            leftcolor: match[2],
            left: match[3],
            rightcolor: match[4],
            right: match[5],
        };
    },
    toBlock: function(obj) {
        return `{{< twotone style="${obj.style}" >}}{{< twotoneleft color="${obj.leftcolor}" >}}${obj.left}{{< \/twotoneleft >}}{{< twotoneright color="${obj.rightcolor}" >}}${obj.right}{{< \/twotoneright >}}{{< \/twotone >}}`;
    },
    toPreview: function(obj) {
        return `<div class="container ${obj.style}"><div class="pure-u-1"><div class="card twotone"><div class="pure-g"><div class="pure-u-1 pure-u-lg-1-2 gutters ${obj.leftcolor}">${obj.left}</div><div class="pure-u-1 pure-u-lg-1-2 gutters ${obj.rightcolor}">${obj.right}</div></div></div></div></div>`;
    },
});
