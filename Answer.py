

from scapy.all import *
import os


# User inputs

n_grams = 3
X = 20


def getNGrams(wordlist, n):
    ngrams = []
    for i in range(len(wordlist)-(n-1)):
        ngrams.append(wordlist[i:i+n])
    return ngrams

payload_normal = []

n_grams_normal = []

all_files = os.listdir("AttackFree")

for filename in all_files:
    try:
        payload = open("AttackFree/"+filename, "r")
        payload_normal.append(''.join(payload.readlines()))
        # print("Try")
    except:
        # print("Except")
        pass

for i in payload_normal:
    n_grams_normal += getNGrams(i, n_grams)


all_files_mal = os.listdir("MixPacket")


for filename in all_files_mal:
    try:
        normal = 0
        mal = 0
        payload = open("MixPacket/"+filename, "r")
        payload_mal = ''.join(payload.readlines())
        n_grams_mal = getNGrams(payload_mal, n_grams)
        for gram in n_grams_mal:
            if gram in n_grams_normal:
                normal += 1
            else:
                mal += 1
        #Calculate Maliciousness = ((Anomalous ngram Count)/(Anomalous ngram Count + Normal ngram Count))*100
        maliciousness = ((mal)/(mal + normal)) * 100

        if maliciousness > X:
            print(maliciousness, "Packet is Anomalous")
        else:
            print(maliciousness, "Print Packet is Normal")


        # print("Try")
    except Exception as e:
        #print("Except", e)
        pass
