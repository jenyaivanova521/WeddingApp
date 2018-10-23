const Handlebars = require('handlebars');
const moment = require('moment');

let hbsHelpers = () => {
    return {
        avatar: (dir, filename, size, suffix) => {
            let src;
            if(['sq', 'sm', 'md', 'lg'].indexOf(suffix) == -1) {
                suffix = 'sq';
            }
            if (filename) {
                src = dir + filename.replace(/(\.[\w\d_-]+)$/i, '_'+ suffix +'$1');
            } else {
                src = '/static/avatar-placeholder.png';
            }
            return '<img class="avatar" src="' + src + '" width="' + size + '">';
        },
        isSelected: (option, value) => {
            if (option == value) {
                return 'selected';
            }
        },
        isChecked: (id, options) => {
            if (options) {
                for (let i = 0; i < options.length; i++) {
                    if (options[i].id == id) {
                        return 'checked';
                    }
                }
            }
        },
        partial: name => {
            return name;
        },
        link: (cssClass, current, href, name, recursive) => {
            let activeClass = '';

            href = href.replace('//', '/'); // ugly fix
            if (current == href || recursive && current != href && current.substr(0, href.length) == href && href != '/') {
                activeClass = 'active';
            };
            return '<a class="' + cssClass + ' ' + activeClass + '" href="' + href + '">' + name + '</a>';
        },
        age: birthdate => {
            let age = moment().diff(birthdate, 'years');
            return isNaN(age) ? '' : age;
        },
        lowerCase: string => {
            return string.toLowerCase();
        },
        ifEquals: (val1, val2, opts) => {
            if (val1 == val2) {
                return opts.fn(this);
            }
            return opts.inverse(this);
        },
        math: (lvalue, operator, rvalue, options) => {
            lvalue = parseFloat(lvalue);
            rvalue = parseFloat(rvalue);
            return {
                "+": lvalue + rvalue,
                "-": lvalue - rvalue,
                "*": lvalue * rvalue,
                "/": lvalue / rvalue,
                "%": lvalue % rvalue
            }[operator];
        },
        compare: (lvalue, operator, rvalue, options) => {

            var operators = {
                '==': function(l, r) {
                    return l == r;
                },
                '===': function(l, r) {
                    return l === r;
                },
                '!=': function(l, r) {
                    return l != r;
                },
                '<': function(l, r) {
                    return l < r;
                },
                '>': function(l, r) {
                    return l > r;
                },
                '<=': function(l, r) {
                    return l <= r;
                },
                '>=': function(l, r) {
                    return l >= r;
                },
                'typeof': function(l, r) {
                    return typeof l == r;
                }
            }

            if (!operators[operator])
                throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);

            var result = operators[operator](lvalue, rvalue);

            if (result) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }

        },
        concat: function() {
            let arg = Array.prototype.slice.call(arguments, 0);
            arg.pop();
            return arg.join('');
        },
        dateFormat: function(date, format, locale) {
            if (typeof format !== 'string') {
                format = 'lll';
            }
            if (typeof locale !== 'string') {
                locale = 'en';
            }
            moment.locale(locale);
            return moment(date).utc().format(format);
        }
    };
}

export {
    hbsHelpers
}
