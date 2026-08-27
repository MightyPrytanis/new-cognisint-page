# Project Dynamo auto show viewbook

This directory contains the maintainable ReportLab source for the existing public Project Dynamo brochure. The
builder replaces that file in place with the synchronized 24-page auto show viewbook; it does not create a second
technical PDF.

## Build

Install the small Python dependency set once:

```bash
python3 -m pip install -r brochure/project-dynamo/requirements.txt
```

Then rebuild the public PDF from the repository root:

```bash
python3 brochure/project-dynamo/build.py
```

The builder reads shared facts, names, sources, and disclaimers from
`content/project-dynamo/publication.json`. Its vector paint, cabin material,
and hardware swatches mirror the finish treatments defined in
`app/portfolio/project-dynamo/palette.ts`. It reuses approved images under
`public/projects/project-dynamo/` without modifying those assets.

The generated file replaces
`public/projects/project-dynamo/project-dynamo-auto-show-brochure.pdf`.

The front cover is a nonphotographic gradient with no Clark badge. The inside cover carries the independent-study
note as a centered, fully justified lockup followed by the approved free-floating trapezoid badge. Photography is
kept separate from solid text fields throughout the viewbook.
