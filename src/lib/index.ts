import {writable} from "svelte/store";
import type { NavItems, ListOfCourses, ListOfRequirements } from "./types";

export const navStates = writable({
    default:<NavItems[]> [
        {   
            name: "Home",
            url: "/",
        },

        {
            name: "Admission",
            url: "/Admission",
        },

        {
            name: "Guides",
            url: "/Guides",
        },

        {
            name: "Login",
            url: "/Login",
        }
    ],

    student:<NavItems[]> [
        {   
            name: "Home",
            url: "/",
        },

        {
            name: "Admission",
            url: "/Admission",
        },

        {
            name: "Guides",
            url: "/Guides",
        },

        {
            name: "Interact",
            url: "/Interact"
        },

        {
            name: "Account",
            url: "/Account",
        }
    ],

    admin:<NavItems[]> [
        
        
        {
            name: "Logs",
            url: "/DataLogs",
        },

        {
            name: "Interact",
            url: "/Interact"
        },

        {
            name: "Account",
            url: "/Account",
        }
    ]

})

export const staticStates = writable({
    showReg: false,
    showRecover: false,
    activeItem:<string | null> "",

    college:<ListOfCourses[]> [
        {
            title: "College of Arts & Sciences",
            courses: [
                "(ABCom)Bachelor of Arts in Communication (Masscom)",
                "(ABEng)Bachelor of Arts in English",
                "(BSM)Bachelor of Sciences in Mathematics",
                "(BSP)Bachelor of Sciences in Psychology",
            ]
        },

        {
            title: "Business & Accountancy",
            courses: [
                "(ABA)Associate in Business Administration",
                "(BSAIS)Bachelor of Science in Accounting Information System",
                "(BSA)Bachelor of Sciences in Accountancy",
                "(BSMA)Bachelor of Science in Management Accounting",
                "(BSREM)Bachelor of Science in Real Estate Management",
                "(BSIA)Bachelor of Science in Internal Auditing",
            ]
        },

        {
            title: "BS Business Administration",
            courses: [
                "(ABA)Associate in Business Administration",
                "(BSAIS)Bachelor of Science in Accounting Information System",
                "(BSA)Bachelor of Sciences in Accountancy",
                "(BSMA)Bachelor of Science in Management Accounting",
                "(BSREM)Bachelor of Science in Real Estate Management",
                "(BSIA)Bachelor of Science in Internal Auditing",
            ]
        },

        {
            title: "College of Computer Studies",
            courses: [
                "(ACT)Associate in Computer Technology",
                "(BSCS)Bachelor of Science in Computer Science",
                "(BSIT)Bachelor of Science in Information Technology",
                "(BSIS)Bachelor of Science in Information System",
            ]
        },

        {
            title: "College of Teacher Education",
            courses: [
                "(BECEd)Bachelor in Early Childhood Education",
                "(BEEd)Bachelor in Elementary Education",
            ]
        },

        {
            title: "Bachelor in Secondary Education",
            courses: [
                "(BSEd)Major in Information Management",
                "(BSEd)Major in English",
                "(BSEd)Major in Filipino",
                "(BSEd)Major in Mathematics",
                "(BSEd)Major in Science",
            ]
        },

        {
            title: "BT Vocational Teacher Education",
            courses: [
                "(BTVTEd)Major in Home Economics and Livelihood Education / HELE",
                "(BTVTEd)Major in Information Communication Technology / ICT",
            ]
        },

        {
            title: "College of Maritime Education",
            courses: [
                "College of Maritime Education"
            ]
        },

        {
            title: "College of Criminology",
            courses: [
                "BSC)Bachelor of Sciences in Criminology",
                "(BSISM)Bachelor of Sciences in Industrial Security Management",
                "(BSPA)Bachelor of Sciences in Public Administration",
            ]
        },

        {
            title: "College of Engineering",
            courses: [
                "(BSCE)Bachelor of Science in Computer Engineering",
                "(BSELE)Bachelor of Sciences in Electronics Engineering",
            ]
        },

        {
            title: "College of Health Sciences",
            courses: [
                "(BSMedTech)Bachelor of Sciences in Medical Technology"
            ]
        },

        {
            title: "Hospitality & Tourism",
            courses: [
                "(BSHM)Bachelor of Sciences in Hospitality Management",
                "(BSTM)Bachelor of Sciences in Tourism Management"
            ]
        }
    ],
    seniorHigh:<ListOfCourses[]> [
        {
            title: "Academic Track",
            courses: [
                "(ABM)Accountancy, Business & Management Strand",
                "(STEM)Science, Technology, Engineering & Mathematics Strand",
                "(HUMSS) Humanities & Social Sciences Strand",
                "(GAS)General Academic Strand",
            ]
        },

        {
            title: "Technical-Vocational Track",
            courses: [
                "(ICT) Information & Communication Technology Strand * Specializes in Computer Programming, Digital Arts & Robotics Technology",
                "(HE) Home Economics Strand * Specializes in Hotel & Restaurant"
            ]
        }
    ],
    requirements:<ListOfRequirements[]> [
        {
            title: "Freshmen Student",
            req: [
                "DepEd ALS Rating Certificate (COR).",
                "Certificate of Complete from ALS School/Center.",
                "Two(2) photocopies of Learner's Permanent Record (AS-5).",
            ]
        },

        {
            title: "Senior High School",
            req: [
                "JHS Report Card (F138B) (Original copy and 2 pcs. photocopies).",
                "National Career Assessment Exam (NCAE) Result (if availabale/optional).",
                "Certificate of Good Moral Character / CGMC (Original and 2 pcs. photocopies).",
                "NSO/PSA Birth Certificate (2 pcs. photocopies).",
                "Colored 2x2 picture with white background (4 pcs).",
                "SHS Eligibility Certificate / Certificate of JHS Completion.",
            ]
        },

        {
            title: "Second Coursers",
            req: [
                "2 Photocopies of TOR (Transcript of Records).",
                "2 Photocopies of Diploma.",
                "2 Photocopies of NSO Birth Certificate (National Statistics Office).",
                "2 Photocopies of Marriage License (if married).",
                "4 Pcs 2X2 Colored Pictures.",
            ]
        }
    ]



})
