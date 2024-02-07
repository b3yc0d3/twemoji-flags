<div align="center">

# twemoji-flags

<img src=".github/header_img.svg">

![url](https://img.shields.io/badge/current%20flag%20count-21-blue)
![url1](https://img.shields.io/github/last-commit/NikiNikOfficially/twemoji-flags)

Pride flags in the style of Twemojis.
</div>

## Emojicons
| Flag | Name | Filename |
|------|------|----------|
| <img width="64" src="./flags/agender_flag.svg" />                  | Agender Flag          | `agender_flag.svg` |
| <img width="64" src="./flags/aromantic_flag.svg" />                | Aromantic Flag        | `aromantic_flag.svg` |
| <img width="64" src="./flags/asexual_flag.svg" />                  | Asexual Flag          | `asexual_flag.svg` |
| <img width="64" src="./flags/bi_flag.svg" />                 | Bisexual Flag         | `bi_flag.svg` |
| <img width="64" src="./flags/ceres_flag.svg" />                    | Ceres Flag            | `ceres_flag.svg` |
| <img width="64" src="./flags/demiboy_flag.svg" />                  | Demiboy Flag          | `demiboy_flag.svg` |
| <img width="64" src="./flags/demigirl_flag.svg" />                 | Demigirl Flag         | `demigirl_flag.svg` |
| <img width="64" src="./flags/demi_flag.svg" />               | Demisexual Flag       | `demi_flag.svg` |
| <img width="64" src="./flags/femboy_flag.svg"> | Femboy Flag | `femboy_flag.svg` |
| <img width="64" src="./flags/genderfluid_flag.svg" />              | Genderfluid Flag      | `genderfluid_flag.svg` |
| <img width="64" src="./flags/genderqueer_nb1_flag.svg" /> | Genderqueer NB 1 Flag | `genderqueer_nb1_flag.svg` |
| <img width="64" src="./flags/genderqueer_nb_flag.svg" />    | Genderqueer NB Flag   | `genderqueer_nb_flag.svg` |
| <img width="64" src="./flags/hetero_flag.svg" />  | Heterosexual Flag     | `hetero_flag.svg` |
| <img width="64" src="./flags/intersexualtiy_flag.svg" />           | Intersexual Flag      | `intersexualtiy_flag.svg` |
| <img width="64" src="./flags/lesbian_flag.svg" />                  | Lesbian Flag          | `lesbian_flag.svg` |
| <img width="64" src="./flags/neutrois_flag.svg" />                 | Neutrois Flag         | `neutrois_flag.svg` |
| <img width="64" src="./flags/nb_flag.svg" />                | NB Flag               | `nb_flag.svg` |
| <img width="64" src="./flags/pan_flag.svg" />               | Pansexual Flag        | `pan_flag.svg` |
| <img width="64" src="./flags/polyamorie1_flag.svg" />            | Polyamorie 1 Flag     | `polyamorie_flag_01.svg` |
| <img width="64" src="./flags/polyamorie_flag.svg" />               | Polyamorie Flag       | `polyamorie_flag.svg` |
| <img width="64" src="./flags/polysexual_flag.svg" />              | Polysexual            | `polysexual_flag.svg` |
| <img width="64" src="./flags/trans_flag.svg" />              | Transgender Flag      | `trans_flag.svg` |
||||
| <img width="64" src="./flags/TEMPLATE_FLAG.svg" style="border: 1px solid orange;" /> | Just a template for those who wanna add more flags | `TEMPLATE_FLAG.svg` |

<!-- Work time: 1 h 14 min, 22.02.2021 -->

## Usage
1. Download the zip file form the github releases.
2. Unzip the archive, you will finde a LICENSE, twf.css and twf.min.css.
3. Put either or both of these CSS files (and the license file) in to your web projects resource folder.
4. Link in your html to either of these two CSS files, like the following
    ```html
    <link rel="stylesheet" href="path/to/twf.min.css">
    ```
    For production project, we recommend to use the minified version (twf.min.css).

And now you can simply use all pride flags of twemoji-flags as simple as the following examples
```html
<div class="agender-flag"></div>
<div class="aromantic-flag"></div>
<div class="asexual-flag"></div>
<div class="bi-flag"></div>
<div class="ceres-flag"></div>
<div class="demi-flag"></div>
<div class="demiboy-flag"></div>
<div class="demigirl-flag"></div>
<div class="femboy-flag"></div>
<div class="genderfluid-flag"></div>
<div class="genderqueer-nb-flag"></div>
<div class="genderqueer-nb1-flag"></div>
<div class="hetero-flag"></div>
<div class="intersexual-flag"></div>
<div class="lesbian-flag"></div>
<div class="neutrois-flag"></div>
<div class="nb-flag"></div>
<div class="pan-flag"></div>
<div class="polyamorie-flag"></div>
<div class="polyamorie1-flag"></div>
<div class="polysexual-flag"></div>
<div class="trans-flag"></div>
```

## Build Process
It's as simple as just running the following command, after cloning this
repository.
```
npm run build-dist
```

## Contribution
You have a flag that isn't included yet? Feel free to make a pull request and add it OR open a Issue!

There are simple rules every pull request has to obay

1. Only make pull requests to the `develop` branch.
2. Your pull request title must be descriptive.
3. Flags MUST be put in to `flags/` as SVG file. If you use Inkscape, export the file as "Plain SVG".
