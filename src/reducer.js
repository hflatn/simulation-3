const initialState = {
first_namestring: '',
last_namestring: '',
genderstring:  '',
hair_colorstring:  '',
eye_colorstring: '',
hobbystring: '',
birthday_daystring: '',
birthday_monthstring: '',
birthday_yearstring: ''
}

const FIRST_NAME = "FIRST_NAME"
const LAST_NAME = "LAST_NAME"
const GENDER = "GENDER"
const HAIR_COLOR ="HAIR_COLOR"
const EYE_COLOR = "EYE_COLOR"
const HOBBY = "HOBBY"
const BIRTHDAY_DAY = "BIRTHDAY_DAY"
const BIRTHDAY_MONTH = "BIRTHDAY_MONTH"
const BIRTHDAY_YEAR = "BIRTHDAY_YEAR"

export default function manager( state = initialState, action) {
    let { payload } = action;
    switch (action.type) {

        case FIRST_NAME: 
            return Object.assign({}, state, {
                first_namestring: payload
            })
        
            case LAST_NAME: 
            return Object.assign({}, state, {
                last_namestring: payload
            })

            case GENDER: 
            return Object.assign({}, state, {
                genderstring: payload
            })

            case HAIR_COLOR: 
            return Object.assign({}, state, {
                hair_colorstring: payload
            })

            case EYE_COLOR: 
            return Object.assign({}, state, {
                eye_colorstring: payload
            })

            case HOBBY: 
            return Object.assign({}, state, {
                hobbystring: payload
            })

            case BIRTHDAY_DAY: 
            return Object.assign({}, state, {
                birthday_daystring: payload
            })

            case BIRTHDAY_MONTH:
            return Object.assign({}, state, {
                birthday_monthstring: payload
            })

            case BIRTHDAY_YEAR:
            return Object.assign({}, state, {
                birthday_yearstring: payload
            })
    }
}

export function first_name(first_namestring) {
    return { type: FIRST_NAME,
             payload: first_namestring
    }
}

export function last_name(last_namestring) {
    return { type: LAST_NAME,
             payload: last_namestring
    }
}

export function gender(genderstring) {
    return { type: GENDER,
             payload: genderstring
    }
}

export function hair_color(hair_colorstring) {
    return { type: HAIR_COLOR,
             payload: hair_colorstring
    }
}

export function eye_color(eye_colorstring) {
    return { type: EYE_COLOR,
             payload: eye_colorstring
    }
}

export function hobby(hobbystring) {
    return { type: HOBBY, 
             payload: hobbystring}
}

export function birthday_day(birthday_daystring) {
    return { type: BIRTHDAY_DAY,
             payload: birthday_daystring}
}

export function birthday_month(birthday_monthstring) {
    return { type: BIRTHDAY_MONTH,
             payload: birthday_monthstring
    }       
}

export function birthday_year(birthday_yearstring) {
    return { type: BIRTHDAY_YEAR,
             payload: birthday_yearstring
    }
}