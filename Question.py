# Program 2: Zero-day attacks are those attacks which are launched for the very first time on the network. One of the methods to detect zero-day attacks is by payload analysis of network packets. In this method, first payload of attack free network traffic is extracted and then ‘n-grams’ are generated from that payload. These n-grams are stored as attack free n-grams. When a test packet comes, n-grams are extracted from the payload of test packet (in the same way, extraction happened for attack free packets) and matched with attack free n-grams (which we created from attack free packets). For that packet there may be ‘m’ n-grams generated from its payload among which ‘k’ n-grams do not match with attack free n-grams (say malicious n-grams). Maliciousness of test packet is calculated using (k/m * 100). If the maliciousness is more than X% then report that packet is malicious.
# Example Input: AttackFree.pcap, MixPackets.pcap, value of ‘n’ for n-gram = 3, X = 20% Working:
# Empty Storage (Say a text file)
# For each packet in AttackFree.pcap do:
# Extract payload P (Example Payload P = Hello World)
# Extract 3-gram = Hel, ell, llo, o<space>W, <space>Wo, orl, rld
# Store these 3-grams in Storage (can be a text file). Remove duplicate n-grams from Storage
# Finish all packets
# Attack free n-grams are now stored from AttackFree.pcap. Now evaluate each packet in MixPackets.pcap and find how many packets are normal and how many are malicious
# Working:
# For each packet in MixPackets.pcap do:
# Extract payload P (Example Payload P = Hello India) Extract 3-gram = Hel, ell, llo, o<space>I, <space>In, ndi, dia For each n-gram of that packet do:
# If n-gram exist in Storage Normal ngram Count ++
# Else
# Anomalous ngram Count ++
# Calculate Maliciousness = ((Anomalous ngram Count)/(Anomalous ngram Count + Normal ngram Count))*100
# If Maliciousness < X
# Print Maliciousness and Print Packet is Normal Else
# Print Maliciousness and Print Packet is Anomalous
# Note: You can use internet, books whatever you need. If code is found plagiarised with other student, then it will deduc10 marks for both of them i.e. even if full program is correct then also you will get 1 mark). Remember code plagiarism t the marks equivalent to plagiarism (if 90% plagiarism found between any two students then 9 marks will be dedusted out of checking rules are different from text plagiarism checking rules.

from scapy.all import *

attack_free = rdpcap("AttackFree.pcap")

a = attack_free
sessions = a.sessions()
for session in sessions:
    for packet in sessions[session]:
        print(packet)
        break


