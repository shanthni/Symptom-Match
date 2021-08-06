from tkinter import *
import numpy as np
import pandas as pd

#l1 = list of all symptoms

l1=['back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine',
'yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach',
'swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool',
'irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs',
'swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips',
'slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness',
'weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine',
'continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain',
'abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum',
'rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion',
'receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen',
'history_of_alcohol_consumption','fluid_overload','blood_in_sputum','prominent_veins_on_calf',
'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose',
'yellow_crust_ooze']

#disease = list of all diseases

disease=['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction',
'Peptic ulcer diseae','AIDS','Diabetes','Gastroenteritis','Bronchial Asthma','Hypertension',
' Migraine','Cervical spondylosis',
'Paralysis (brain hemorrhage)','Jaundice','Malaria','Chicken pox','Dengue','Typhoid','hepatitis A',
'Hepatitis B','Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis',
'Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)',
'Heartattack','Varicoseveins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis',
'Arthritis','(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection','Psoriasis',
'Impetigo']

l2=[]

for i in range(0,len(l1)):
    l2.append(0)

#file that stores data frame of all symptoms and its corresponding diseases
# this is the training data
# training data used to train ml algorithms for accuracy
# training data contains symptoms and their corresponding diseases
#   **(answer to questions) where question=symptoms and answers = disease
df=pd.read_csv("Prototype.csv")


#Replace the values in the imported file by pandas by the inbuilt function replace in pandas.

df.replace({'prognosis':{'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,
'Peptic ulcer diseae':5,'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,
'Migraine':11,'Cervical spondylosis':12,
'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,
'Hepatitis B':20,'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,
'(vertigo) Paroymsal  Positional Vertigo':36,'Acne':37,'Urinary tract infection':38,'Psoriasis':39,
'Impetigo':40}},inplace=True)

X= df[l1]
y = df[["prognosis"]]
np.ravel(y)

#reading in data frame used as testing data:
#testing data: trained algorithms are tested on this data to check whether algorithms working
#testing data only contains symptoms
tr=pd.read_csv("Prototype-1.csv")

#Use replace method in pandas.

tr.replace({'prognosis':{'Fungal infection':0,'Allergy':1,'GERD':2,'Chronic cholestasis':3,'Drug Reaction':4,
'Peptic ulcer diseae':5,'AIDS':6,'Diabetes ':7,'Gastroenteritis':8,'Bronchial Asthma':9,'Hypertension ':10,
'Migraine':11,'Cervical spondylosis':12,
'Paralysis (brain hemorrhage)':13,'Jaundice':14,'Malaria':15,'Chicken pox':16,'Dengue':17,'Typhoid':18,'hepatitis A':19,
'Hepatitis B':20,'Hepatitis C':21,'Hepatitis D':22,'Hepatitis E':23,'Alcoholic hepatitis':24,'Tuberculosis':25,
'Common Cold':26,'Pneumonia':27,'Dimorphic hemmorhoids(piles)':28,'Heart attack':29,'Varicose veins':30,'Hypothyroidism':31,
'Hyperthyroidism':32,'Hypoglycemia':33,'Osteoarthristis':34,'Arthritis':35,
'(vertigo) Paroymsal  Positional Vertigo':36,'Acne':37,'Urinary tract infection':38,'Psoriasis':39,
'Impetigo':40}},inplace=True)

X_test= tr[l1]
y_test = tr[["prognosis"]]

np.ravel(y_test)

# ML algorithms: Decision Tree, Random Forrest, Naive Bayes
# These are 3 independent algorithms that run on the testing data
# the best algorithm is the one that has returns the best accuracy/ratio of right:wrong
# the accuracy of each algorithm is measured after comparing the disease returned by the algorithm with
#   the actual disease the symptoms correspond to.

# Decision Tree
def DecisionTree():
    #import tree : binary tree representing symptoms where the
    #leaf nodes are the disease
    #       --> can be looked as the destination where the path is the binary tree branches

    from sklearn import tree

    #fits the tree by using the train data to form a
    #binary tree where each branch is a decision (yes/no)
    clf3 = tree.DecisionTreeClassifier()
    clf3 = clf3.fit(X, y)

    #calculates how accurate the tree is:
    # accuracy of predictions compared to train data
    from sklearn.metrics import accuracy_score
    y_pred = clf3.predict(X_test)
    print(accuracy_score(y_test, y_pred))
    print(accuracy_score(y_test, y_pred, normalize=False))

    #5 symptoms chosen by user
    allblank = False
    psymptoms = [Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get()]
    if(psymptoms[0] == "Select Here" and psymptoms[1] =="Select Here" and psymptoms[2] =="Select Here"
        and psymptoms[3] == "Select Here" and psymptoms[4] == "Select Here"):
            allblank=True

    #
    allblank2 = False
    psymptoms2 = [Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get()]
    if (psymptoms2[0] == "Select Here" and psymptoms2[1] == "Select Here" and psymptoms2[2] == "Select Here"
            and psymptoms2[3] == "Select Here"):
        allblank2 = True

    allblank3 = False
    psymptoms3 = [Symptom1.get()]
    if (psymptoms2[0] == "Select Here" and psymptoms2[1] == "Select Here"):
        allblank3 = True


    #map symptoms in l2 list
    for k in range(0, len(l1)):
        for z in psymptoms:
            if (z == l1[k]):
                l2[k] = 1

    copy_l1 = l1
    copy_l2 = l2
    # map symptoms in l2 list
    for k in range(0, len(copy_l1)):
        for z in psymptoms2:
            if (z == copy_l1[k]):
                copy_l2[k] = 1

    copy2_l1 = l1
    copy2_l2 = l2
    # map symptoms in l2 list
    for k in range(0, len(copy2_l1)):
        for z in psymptoms3:
            if (z == copy2_l1[k]):
                copy2_l2[k] = 12

    #predict disease using symptoms
    inputtest = [l2]
    predict1 = clf3.predict(inputtest)
    predicted1 = predict1[0]

    # predict disease using symptoms
    inputtest2 = [copy_l2]
    predict2 = clf3.predict(inputtest2)
    predicted2 = predict2[0]

    # predict disease using symptoms
    inputtest3 = [copy2_l2]
    predict3 = clf3.predict(inputtest3)
    predicted3 = predict3[0]

    #find predicted disease in list of diseases
    h = 'no'
    for a in range(0, len(disease)):
        if (predicted1 == a):
            h = 'yes'
            break

    # find predicted disease in list of diseases
    h2 = 'no'
    for b in range(0, len(disease)):
        if (predicted2 == b):
            h2 = 'yes'
            break

    # find predicted disease in list of diseases
    h3 = 'no'
    for c in range(0, len(disease)):
        if (predicted3 == c):
            h3 = 'yes'
            break

    #display disease if found in list of diseases
    if(allblank==True):
        t1.delete("1.0", END)
        t1.insert(END, "No symptoms inserted")

    elif (h == 'yes'):
        t1.delete("1.0", END)
        t1.insert(END, disease[a])
    else:
        t1.delete("1.0", END)
        t1.insert(END, "Not Found")

    if(disease[a]!=disease[b]):
        if (h2 == 'yes'):
            t2.delete("1.0", END)
            t2.insert(END, disease[b])
        else:
            t1.delete("1.0", END)
            t2.insert(END, "Not Found")

    if (disease[a] != disease[c] and disease[b] != disease[c]):
        if (h3  == 'yes'):
            t3.delete("1.0", END)
            t3.insert(END, disease[c])
        else:
            t3.delete("1.0", END)
            t3.insert(END, "Not Found")


# GUI stuff..............................................................................

root = Tk()
root.configure(background='white')

LabelPriority = StringVar()
LabelPriority.set("Select Symptoms in order of priority")

Symptom1 = StringVar()
Symptom1.set("Select Here")

Symptom2 = StringVar()
Symptom2.set("Select Here")

Symptom3 = StringVar()
Symptom3.set("Select Here")

Symptom4 = StringVar()
Symptom4.set("Select Here")

Symptom5 = StringVar()
Symptom5.set("Select Here")

S1Lb = Label(root, text="Symptom 1", fg="green", bg="White")
S1Lb.config(font=("Times", 15, "bold italic"))
S1Lb.grid(row=7, column=0, pady=10, sticky=W)

S2Lb = Label(root, text="Symptom 2", fg="green", bg="white")
S2Lb.config(font=("Times", 15, "bold italic"))
S2Lb.grid(row=8, column=0, pady=10, sticky=W)

S3Lb = Label(root, text="Symptom 3", fg="Green", bg="white")
S3Lb.config(font=("Times", 15, "bold italic"))
S3Lb.grid(row=9, column=0, pady=10, sticky=W)

S4Lb = Label(root, text="Symptom 4", fg="green", bg="white")
S4Lb.config(font=("Times", 15, "bold italic"))
S4Lb.grid(row=10, column=0, pady=10, sticky=W)

S5Lb = Label(root, text="Symptom 5", fg="green", bg="white")
S5Lb.config(font=("Times", 15, "bold italic"))
S5Lb.grid(row=11, column=0, pady=10, sticky=W)

lrLb = Label(root, text="DecisionTree", fg="white", bg="red")
lrLb.config(font=("Times", 15, "bold italic"))
lrLb.grid(row=15, column=0, pady=10, sticky=W)

OPTIONS = sorted(l1)

S1 = OptionMenu(root, Symptom1, *OPTIONS)
S1.grid(row=7, column=1)

S2 = OptionMenu(root, Symptom2, *OPTIONS)
S2.grid(row=8, column=1)

S3 = OptionMenu(root, Symptom3, *OPTIONS)
S3.grid(row=9, column=1)

S4 = OptionMenu(root, Symptom4, *OPTIONS)
S4.grid(row=10, column=1)

S5 = OptionMenu(root, Symptom5, *OPTIONS)
S5.grid(row=11, column=1)

dst = Button(root, text="Prediction 1", command=DecisionTree, bg="Red", fg="black")
dst.config(font=("Times", 15, "bold italic"))
dst.grid(row=8, column=3, padx=10)

t1 = Text(root, height=1, width=40, bg="white", fg="red")
t1.config(font=("Times", 15, "bold italic"))
t1.grid(row=15, column=1, padx=10)

t2 = Text(root, height=1, width=40, bg="White", fg="Blue")
t2.config(font=("Times", 15, "bold italic"))
t2.grid(row=18, column=1, padx=10)

t3 = Text(root, height=1, width=40, bg="white", fg="white")
t3.config(font=("Times", 15, "bold italic"))
t3.grid(row=21, column=1, padx=10)

root.mainloop()