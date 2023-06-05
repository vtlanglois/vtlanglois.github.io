# Code Review

An internal document outlining a code review of Version 1.0 of my website.

## Format

The review follows this format:

## Category

Description of category

### Components

list of elements related to that category

## Scaffolding

### `index`

`index`'s job is to render the app.

The `App` is wrapped in a `HashRouter` and a `React.StrictMode` component. The `StrictMode` component is used to call component functions twice. It has no effect on production.

HashRouter is used to route pages, as GitHub Pages does not support BrowserRouter. Keep this in mind when we build a future version of this website NOT on GH Pages

There is a `reportWebVitals()` function here. Don't need it, but figure out how it works.

### `App`

`App`'s job is to be the main component of the entire website. Consistent elements, such as the header and footer of the website, should be here.

Something is wrong with both of the styling for WebsiteHeader and ContactIcons. must fix.

Needs a 404 page, just in case. 

## General Components

### TabHeader

I really like this component, everything just works. **However**, this will need a rework. it does not match the planned redesign w/ cards. 

Theres also been an issue with `props` requiring a `: any` after it. Def a TS thing, look into further.

## `About`

`About`'s purpose is to introduce myself to visitors and provide some info about myself, both personal and professional. 

One thing we will **need** to evaluate is if I want to continue to use ReactStrap as a library. While it is very to have these elements already built for me to use, they are limited. EXCEPT for the `Container` components, those are essential for this website to work properly.

The whole website was buitl without a clear UI made beforehand. It **really** shows in this page. It's UI is inconsistent with the other two pages, and needs to change pronto. Out of all the pages, this may be the one that requires the most work UI-wise.

IDK why, but a long, long while ago, the header broke and started to overlap the page. I dont want that, find a fix.

I think my About Me section is solid. May do a rewrite but should be fine for now.

### `WorkAccordian`

name is now inaccurate. No accordian is used. Refactor immediately.

The `Row`/`Col`'s present look nice, *on a browser*. On mobile, leaves some weird empty spaces. Check on `ExperienceItem` to fix this. Tailwind OR better CSS is in order.

This will apply to almost **all** of components, but lets rewrite these all to be `functions`, not `consts`

Need to rewrite these bullet points to match my Resume and CV.

Also, add a button to allow visitors to download my Resumes and my CV.

### ExperienceItem

To remain consistent with projects and education, lets make a type for ExperienceItems.

I know theres a better way to do `interface`s, gotta figure out what that is.

## `Education`

From a UI perspective, all that really needs changing will be done with the `TabHeader` rework.

Some classes are missing. Lets add them in the future.

Related to all of them, but i'll need to remove unused imports. def a way to do that to ALL files.

Should I add a note about the pandemic? Could help give context for some things.


### `AcademicYear`

Got another instance of needing `props` with a type. See why thats the case by properly learning TS.

Can most likely use the spread operators on these `SemesterItem` components

### `SemesterItem`

Not a big deal, but I want to rename these kinds of components to remove `Item` from their name. `Semester` works just fine.

There seems to be inconsistency with the spacing on mobile devices. 

So either get real good at CSS, or use Tailwind. Your call.

This one will harder to include a filtering system for. I'll need to make a whole new component for this to work properly

### `DegreeInfo`

The naming for this component was future-proofing in-case I ever get a Master's. Thus, having two degree. So, for now, name works perfectly. 

I really wonder if `interfaces` are how I should be implementing these. maybe just an object works? Further research is needed.

`Year` interface is perfect, no notes. Same with `Semester`. `CollegeClass` is also future-proofing if I want to include HS classes, but honestly just calling them classes is fine.

I wonder if I should include all my `type`s in one class? I'll keep `In Progress` as an option, again, for future-proofing

## `Projects`

You can clearly tell this was the most recent page, as this is just. Clean. Really just needs the TabHeader redesign and a tag filter system and it would be perfect.

### `ProjectCard`

Now, this is a tricky part. If I remove ReactStrap, the card infrastructure is also gone. I would like to remove the lines.

Cards take up a lot of space on mobile, and also on desktop. Maybe on desktop show 2 next to each other, and have dropdowns for mobile only?






