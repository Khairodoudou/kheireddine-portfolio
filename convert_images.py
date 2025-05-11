from PIL import Image
import os
import sys
import io

# Forcer l'encodage UTF-8 pour la console
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Chemins des dossiers
dossier_source = r"C:\Users\APPLe\Desktop\certif_web"
dossier_destination = r"C:\Users\APPLe\Desktop\kheireddine-portfolio\src\images"

# Créer le dossier de destination s'il n'existe pas
if not os.path.exists(dossier_destination):
    os.makedirs(dossier_destination)

# Vérifier si le dossier source existe
if not os.path.exists(dossier_source):
    print(f"Le dossier source '{dossier_source}' n'existe pas.")
else:
    for nom_fichier in os.listdir(dossier_source):
        chemin_complet = os.path.join(dossier_source, nom_fichier)
        
        if os.path.isfile(chemin_complet) and nom_fichier.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            try:
                image = Image.open(chemin_complet)
                image_redimensionnee = image.resize((921, 712))
                chemin_destination = os.path.join(dossier_destination, nom_fichier)
                image_redimensionnee.save(chemin_destination)
                
                print(f"✅ '{nom_fichier}' redimensionnée et enregistrée dans '{dossier_destination}'.")
            
            except Exception as e:
                print(f"❌ Erreur lors du traitement de '{nom_fichier}': {e}")
        else:
            print(f"⚠️ '{nom_fichier}' n'est pas une image valide.")

print("🎯 Traitement terminé avec succès.")
