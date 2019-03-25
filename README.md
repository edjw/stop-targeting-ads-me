# Stop Targeting Ads at Me

This is the source code of a website at [https://stoptargetingads.me](https://stoptargetingads.me)

The website helps people find out how to turn off targeted ads on a range of websites, apps, and products.

It is a static site that builds with Jekyll.

## To-Do

- Check [the JSON file with all data in](https://stoptargetingads.me/api/api.json) works and is useful for others

## How to add a company or product to the site

Each company/product needs a single markdown file (.md) in the format below. They are kept in the [`_items`](https://github.com/edjw/stop-tracking-me/tree/master/_items) folder in the site. It should also have a square logo for the company or product. They are kept in the [`images/logos`](https://github.com/edjw/stop-tracking-me/tree/master/images/logos) folder of the site.

### Single name and single opt-out link
```
---
name: Name 1
logo: logo.png
link: examplelink.com
---
Instructions on how to opt out go here. You can use any Markdown here.
```

### Multiple names and multiple opt-out links
```
---
name:
  - Name 1
  - Name 2
logo: logo.png
link:
  - examplelink1.com
  - examplelink2.com
---
Instructions on how to opt out go here. You can use any Markdown here.
```
