# Tester vos composants React avec Jest et React Testing Library

Dans ce workshop nous allons voir comment tester des composants React à l'aide du framework Jest et de la librairie testing-library. 
Pour cela, vous avez à disposition une App de type todo list et plusieurs tests à écrire pour en vérifier le bon fonctionnement.

## Ce que je vais apprendre

-   Tests de components React
-   Simulation d'action utilisateurs
-   Tests async et mock d'API


## [🚀 Slides](https://workshop-react-testing.pcailly.dev)

## 🛠 Lancer le workshop en local

### Installation
```
git clone git@github.com:PaulCailly/workshop-react-testing.git -b practice
cd workshop/app && yarn
```

### Commencer les exercices
```
cd workshop/app && yarn test
```
Vous pouvez maintenant ecrire vos tests dans le dossier `workshop/app/src/tests`. 
Le processus étant en `watch mode`, chaque changement dans un des tests ou dans un des fichiers testés relancera le script.

### Lancer l'App démo
```
cd workshop/app && yarn start
```

### Solutions
```
git checkout master
```

## 📚 Ressources

### Reading list
* https://kentcdodds.com/blog/but-really-what-is-a-javascript-test
* https://kentcdodds.com/blog/test-isolation-with-react
* https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
* https://blog.octo.com/la-pyramide-des-tests-par-la-pratique-5-5/

### Documentation
* https://jestjs.io/docs/en/getting-started
* https://testing-library.com/docs/react-testing-library/intro
