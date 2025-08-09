// eslint.config.js (Flat Config, ESM)
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    // 무시 경로 (.eslintignore 대체)
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/.storybook/**',
            '**/*.js',
            '**/*.d.ts',
            '**/*.config.ts',
        ],
    },

    // TS 권장 규칙
    ...tseslint.configs.recommended,

    // 플러그인 및 규칙
    {
        plugins: { unicorn },
        rules: {
            // 파일명은 PascalCase로 강제
            'unicorn/filename-case': [
                'error',
                {
                    cases: { pascalCase: true },
                },
            ],

            // 클래스명은 PascalCase로 강제
            '@typescript-eslint/naming-convention': [
                'error',
                { selector: 'class', format: ['PascalCase'] },
            ],
        },
    },

    // 예외: index.* 파일은 파일명 규칙 제외
    {
        files: ['**/index.*'],
        rules: {
            'unicorn/filename-case': 'off',
        },
    },

    // 예외: 패키지 소스에서 any/Function 관련 규칙 완화
    {
        files: ['packages/**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    }
);
