# Project Dynamo auto show brochure

This directory contains the maintainable source for the existing public Project Dynamo brochure.

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
