---
id: guide-utilisation
title: Guide d’Utilisation
slug: /
# Affiche les entêtes de h2 à h5
toc_min_heading_level: 2
toc_max_heading_level: 5
---

## **Installation**

1. #### **Créez un fork du référentiel sur votre GitHub**
   - Rendez-vous sur le repository original et cliquez sur le bouton "[fork] (https://github.com/ccbikai/Sink/fork "lien github fork")" pour créer une copie dans votre propre compte GitHub.
   

2. #### **Configuration sur Cloudflare**
   - **Accédez à votre [dashboard Cloudflare] https://dash.cloudflare.com/( "lien github fork")**
     - Connectez-vous à votre compte Cloudflare.
     - Allez dans la section **Workers**.
     - Cliquez sur **Create a Worker**.
   
   - **Connexion à GitHub**
     - Allez dans l’onglet **Pages**.
     - Cliquez sur **Connect to Git**.
     - Sélectionnez le repository que vous avez créé en fork.

![montre le dashboard Cloudflare](./img/board.png)


3. #### **Paramètres de Build**
   - Dans la section **Build settings** :
     - Dans **Framework preset**, sélectionnez **Nuxt.js** comme préréglage.
     - Créez les variables suivantes :
       1. **NUXT_SITE_TOKEN** : Votre token doit avoir une longueur d’au moins 8 caractères.
       2. **NUXT_CF_ACCOUNT_ID** : Utilisez votre identifiant de compte Cloudflare.
       3. **NUXT_CF_API_TOKEN** : Utilisez un jeton API Cloudflare avec l’autorité **Account.Account Analytics**.

![montre la création du projet](.\img\variable.png)

4. #### **Trouver votre identifiant de compte Cloudflare**
   - Créez d’abord un compte et un domaine.
   - Sur le dashboard, allez dans **Websites**.
   - Sélectionnez votre domaine pour trouver votre identifiant de compte.
   ![montre l'endroit ou on trouve 'l'id du compte](.\img\apiAccount.png)


5. #### **Créer un jeton API Cloudflare**
   - Accédez à votre profil en haut à droite.
   - Allez dans **API Tokens**.
   - Cliquez sur **Create Token**.
   - En bas de la page, cliquez sur **Create Custom Token** et entrez les permissions adéquates.
   ![montre l'endroit de la création api](.\img\apiToken.png)


6. #### **Enregistrer et déployer**
   - Après avoir configuré les variables et les permissions, enregistrez vos paramètres.
   - Déployez votre projet en suivant les instructions fournies sur la plateforme.

## **Paramètres**

Dans le projet, allez dans `Settings > Function` pour :

1. Aller à **KV namespace bindings** pour créer un namespace du nom de `KV` pour l’associer à une variable KV.
![montre la configueKV namespace bindings](.\img\kv.png)
2. Aller à **Workers AI Bindings** pour lier le nom de la variable AI au catalogue IA des travailleurs (facultatif).
![montre la configue de Workers AI Bindings](.\img\workersAi.png)
3. Aller à **Analytics Engine bindings** pour lier le nom de la variable ANALYTICS à l'ensemble de données et activer la version bêta 
![montre la configue de Analytics Engine bindings](.\img\apiToken.png)de Cloudflare Analytics Engine pour votre compte.

## **Redéployer le projet**
   - Allez dans Deployments.
   - Cliquez sur View details.
   - Cliquez sur Manage deployment pour redéployer votre projet avec les nouveaux paramètres.

  

